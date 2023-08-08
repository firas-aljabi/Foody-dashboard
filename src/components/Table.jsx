/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Button, IconButton, Tooltip } from "@mui/material";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export const Table = ({
  data,
  fields,
  numberOfRows,
  enableTopToolBar,
  enableBottomToolBar,
  enablePagination,
  enableRowSelection,
  enableColumnFilters,
  enableEditing,
  enableColumnDragging,
  showPreview,
  routeLink,
  onDelete,
}) => {
  const columns = useMemo(() => fields, []);
  const [status, setStatus] = useState({});
const handleStatusChange = useCallback(
  (row) => {
    const newStatus = !status[row.id];
    setStatus((prevStatus) => ({ ...prevStatus, [row.id]: newStatus }));
    // Call the API here to update the status with `row.id` and `newStatus`
    // Example: `axios.put(`edit_status/${row.id}`, { status: newStatus })`
  },
  [status]
);
  const [tableData, setTableData] = useState(() => data);

  const handleDeleteRow = useCallback(
    (row) => {
      if (!confirm("Are you sure you want to delete")) {
        return;
      }
      onDelete(row.id);
  
      setTableData((prevData) => {
        const newData = [...prevData];
        newData.splice(row.index, 1);
        return newData;
      });
    },
    [onDelete]
  );
  // renderTopToolbarCustomActions={({ table }) => (
  //   <Button sx={{backgroundColor:"#7E351A"}}
  //          disableElevation
          
  //          // disabled={!table.getIsSomeRowsSelected()}
  //          variant="contained"
  //          // onClick={handleDelete}
  //        >
  //          Delete Selected
  //        </Button>
  //      )}
  return (
    <MaterialReactTable
      columns={columns}
      data={tableData.slice(0, numberOfRows)}
      getRowId={(row) => row.id}
      enableEditing={enableEditing}
      enableColumnDragging={enableColumnDragging}
      enableColumnOrdering
      enableRowSelection={enableRowSelection}
      enableColumnFilters={enableColumnFilters}
      enablePagination={enablePagination}
      enableBottomToolbar={enableBottomToolBar}
      enableTopToolbar={enableTopToolBar}
      renderRowActions={({ row }) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Tooltip arrow placement="right" title="Delete">
            <IconButton sx={{color:"#602723"}} onClick={() => handleDeleteRow(row)}>
              <FiTrash  />
            </IconButton>
          </Tooltip>
          {showPreview && routeLink && (
            <Tooltip arrow placement="right" title="View" >
              <Link to={`/${routeLink}/${row.id}`}>
                <IconButton>
                  <FiEye />
                  
                </IconButton>
              </Link>
            </Tooltip>
            
          )}
          
             <Tooltip arrow placement="right" title="Edit">
              <Link to={`/${routeLink}/edit/${row.id}`}> {/* Modified link */}
                <IconButton>
                  <FiEdit />
                </IconButton>
              </Link>
            </Tooltip>
        </Box>
      )}
     
      muiTableBodyRowProps={{ hover: false }}
      muiTablePaperProps={{
        sx: {
          padding: "20px",
          borderRadius: "15px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
        },
      }}
      muiTableContainerProps={{
        sx: { borderRadius: "15px" },
      }}
      muiTableHeadCellProps={{
        sx: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      }}
      muiTableHeadProps={{
        sx: {
          "& tr th": {
            borderWidth: "1px",
            borderColor: "divider",
            borderStyle: "solid",
          },
        },
      }}
      muiTableBodyProps={{
        sx: {
          "& tr td": {
            borderWidth: "1px",
            borderColor: "divider",
            borderStyle: "solid",
          },
        },
      }}
    />
  );
};

export default Table;
