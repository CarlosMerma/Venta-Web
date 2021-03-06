$(function(){
    var url = "https://autocs.herokuapp.com/productos";


    $("#grid").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "id",
            loadUrl: url ,
            insertUrl: url ,
            updateUrl: url ,
            deleteUrl: url ,
            onBeforeSend: function(method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        }),
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },
        remoteOperations: {
            sorting: true,
            paging: true
        },
        paging: {
            pageSize: 12
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [8, 12, 20]
        },
        columns: [{
            dataField: "id",
            dataType: "number",
            allowEditing: false
        }, {
            dataField: "codigo",
            dataType:"number"
        }, {
            dataField: "nombre"
        },  {
            dataField: "marca"
        },  {
            dataField: "cantidad",
            dataType:"number"
        },{
            dataField: "precio",
            dataType: "number"
        }, ],
    }).dxDataGrid("instance");
});
