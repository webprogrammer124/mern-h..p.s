import React from 'react'
import MaterialTable from 'material-table'
import FormDialog from '../Dialog';
import AddIcon from '@material-ui/icons/Add';
const List = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [columns, setColumns] = React.useState([
        { title: 'Adı', field: 'name' },
        { title: 'Soyadı', field: 'surname' },
        { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
        { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
    ]);
    const [data, setData] = React.useState([
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }
    ])
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
                    //     icon: AddIcon,
                    //     tooltip: 'Add',
                    //     onClick: handleClickOpen,
                    // }
                  ]}
                // editable={{
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
                    // onRowUpdate: (newData, oldData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             const dataUpdate = [...data];
                    //             const index = oldData.tableData.id;
                    //             dataUpdate[index] = newData;
                    //             setData([...dataUpdate]);

                    //             resolve();
                    //         }, 1000);
                    //     }),
                    // onRowDelete: oldData =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             const dataDelete = [...data];
                    //             const index = oldData.tableData.id;
                    //             dataDelete.splice(index, 1);
                    //             setData([...dataDelete]);

                    //             resolve();
                    //         }, 1000);
                    //     })
                // }}
            />
        </div>
    )
}

export default List
