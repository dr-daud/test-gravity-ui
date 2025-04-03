import React, {useState, useEffect} from 'react';
import {
    Table,
    withTableActions,
    RenderRowActionsProps,
    Button,
    TableColumnConfig,
} from '@gravity-ui/uikit';
import {data as initialData, columns, ILandmarksData} from '../../constants';

interface LandmarksTableProps {
    onItemCountChange: (count: number) => void;
    isAdmin: boolean;
}

const MyTable = withTableActions<ILandmarksData>(Table);

const LandmarksTable: React.FC<LandmarksTableProps> = ({onItemCountChange, isAdmin}) => {
    const [data, setData] = useState<ILandmarksData[]>(initialData);
    const [editingItem, setEditingItem] = useState<ILandmarksData | null>(null);

    const handleDelete = (id: string) => {
        setData((prevData) => {
            const newData = prevData.filter((item) => item.id !== id);
            onItemCountChange(newData.length);
            return newData;
        });
    };

    const handleEdit = (item: ILandmarksData) => {
        setEditingItem({...item});
    };

    const handleSave = () => {
        if (editingItem) {
            setData((prevData) =>
                prevData.map((item) => (item.id === editingItem.id ? editingItem : item)),
            );
            setEditingItem(null);
        }
    };

    const handleCancel = () => {
        setEditingItem(null);
    };

    const handleFieldChange = (field: keyof ILandmarksData, value: any) => {
        if (editingItem) {
            const updatedItem = {...editingItem, [field]: value};

            if (field === 'coordinates' && typeof value === 'string') {
                const coords = value.split(',').map((coord: string) => coord.trim());
                const latitude = parseFloat(coords[0]);
                const longitude = parseFloat(coords[1]);

                if (!isNaN(latitude) && !isNaN(longitude)) {
                    updatedItem.coordinates = [latitude, longitude];
                    updatedItem.mapLink = `https://maps.google.com/?q=${latitude},${longitude}`;
                }
            }

            setEditingItem(updatedItem);
        }
    };

    const handleAddNewLandmark = () => {
        const newLandmark: ILandmarksData = {
            id: `${data.length + 1}`,
            name: 'Новая достопримечательность',
            description: 'Описание новой достопримечательности',
            time: new Date().toISOString().split('T')[0],
            rating: 0,
            photo: '',
            location: 'Неизвестно',
            coordinates: [0, 0],
            mapLink: `https://maps.google.com/?q=0,0`,
            status: 'в планах',
        };
        setData([...data, newLandmark]);
        onItemCountChange(data.length + 1);
        setEditingItem(newLandmark);
    };

    const updatedColumns: TableColumnConfig<ILandmarksData>[] = columns.map((col) => {
        return {
            ...col,
            template: (item: ILandmarksData) =>
                editingItem?.id === item.id ? (
                    col.id === 'photo' ? (
                        <input
                            value={editingItem[col.id as keyof ILandmarksData] as string}
                            onChange={(e) =>
                                handleFieldChange(col.id as keyof ILandmarksData, e.target.value)
                            }
                            placeholder="Введите URL изображения"
                        />
                    ) : col.id === 'status' ? ( 
                        <select
                            value={editingItem.status}
                            onChange={(e) => handleFieldChange('status', e.target.value)}
                        >
                            <option value="В планах">В планах</option>
                            <option value="Осмотрена">Осмотрена</option>
                        </select>
                    ) : (
                        <input
                            value={editingItem[col.id as keyof ILandmarksData] as string}
                            onChange={(e) =>
                                handleFieldChange(col.id as keyof ILandmarksData, e.target.value)
                            }
                        />
                    )
                ) : col.id === 'description' ? (
                    <div
                        style={{
                            maxWidth: '460px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                        title={item.description} 
                    >
                        {item.description}
                    </div>
                ) : col.id === 'photo' ? (
                    <img
                        src={item[col.id as keyof ILandmarksData] as string}
                        alt="Фото достопримечательности"
                        style={{
                            width: '50px',
                            height: '50px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                        }}
                    />
                ) : col.id === 'mapLink' ? (
                    <a
                        href={`https://maps.google.com/?q=${item.coordinates[0]},${item.coordinates[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Открыть на карте
                    </a>
                ) : (
                    item[col.id as keyof ILandmarksData]
                ),
        };
    });
    

    const RowAction: React.FC<RenderRowActionsProps<ILandmarksData>> = ({item}) => {
        if (!isAdmin) {
            return null;
        }
        return editingItem?.id === item.id ? (
            <>
                <Button view="action" onClick={handleSave}>
                    ✅
                </Button>
                <Button view="action" onClick={handleCancel}>
                    ❌
                </Button>
            </>
        ) : (
            <>
                <Button view="action" onClick={() => handleEdit(item)}>
                    ✏️
                </Button>
                <Button view="action" onClick={() => handleDelete(item.id)}>
                    🗑
                </Button>
            </>
        );
    };

    useEffect(() => {
        onItemCountChange(data.length);
    }, [data]);

    return (
        <div style={{padding: 20}}>
            <h2>Список достопримечательностей</h2>
            <MyTable data={data} columns={updatedColumns} renderRowActions={RowAction} />
            {isAdmin && (
                <div style={{marginTop: '20px', display: 'flex', justifyContent: 'flex-end'}}>
                    <Button view="action" onClick={handleAddNewLandmark}>
                        Добавить
                    </Button>
                </div>
            )}
        </div>
    );
};

export default LandmarksTable;
