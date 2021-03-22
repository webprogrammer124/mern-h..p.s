import React, {useEffect} from 'react'
import MaterialTable from 'material-table'
import FormDialog from '../Dialog';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
const List = () => {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([])
    const [columns, setColumns] = React.useState([
        { title: 'TokenNo', field: 'TokenNo' },
        { title: 'Registeration Date', field: 'RegistrationDate' },
        { title: 'MR No', field: 'MRNo' },
        { title: 'Patient Name', field: 'Name', },
        { title: 'Ref By', field: 'RefBy' },
        { title: 'Age', field: 'Age', type: 'numeric' }
    ]);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        axios.get('http://localhost:4000/api/register')
        .then((res) => {
            console.log(res)
            setData(res.data.data)
        })

    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/api/register/${data[id]._id}`)
        .then(
            (res) => {
              console.log('Post was deleted successfully', res);
              
            })
          .catch((err) => console.log(err));
    }

    // const handleedit = (id) => {
    //     axios.get(`http://localhost:4000/api/register/${data[id]._id}`)
    //     .then(
    //         (res) => {
    //             setOpen(true);
    //         })
    //       .catch((err) => console.log(err));
    // }

    return (
        <div style={{ maxWidth: '90%', margin : 'auto' }}>
            <FormDialog open={open} handleClose={handleClose}/>
            <MaterialTable
                title = "Dummy Data"
                columns = {columns}
                data = {data}
                actions={[
                    {
                        icon: AddIcon,
                        tooltip: 'Add',
                        isFreeAction: true,
                        onClick: handleClickOpen,
                    },
                    // {
                    //     icon: EditIcon,
                    //     tooltip: 'edit',
                    //     onClick: handleedit,
                    // },
                  ]}
                editable={{
                    // isEditable: rowData => rowData.name === 'a', // only name(a) rows would be editable
                    // isEditHidden: rowData => rowData.name === 'x',
                    // isDeletable: rowData => rowData.name === 'b', // only name(b) rows would be deletable,
                    // isDeleteHidden: rowData => rowData.name === 'y',
                    // onBulkUpdate: changes => 
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             /* setData([...data, newData]); */

                    //             resolve();
                    //         }, 1000);
                    //     }),
                    // onRowAddCancelled: rowData => console.log('Row adding cancelled'),
                    // onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
                    // onRowAdd: newData =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             /* setData([...data, newData]); */

                    //             resolve();
                    //         }, 1000);
                    //     }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);
                                resolve();
                            }, 1000);
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);
                                handleDelete(oldData.tableData.id)
                                resolve();
                            }, 1000);
                        })
                }}
            />
        </div>
    )
}

export default List