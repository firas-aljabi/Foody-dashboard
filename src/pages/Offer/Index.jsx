import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";
import Table from "../../components/Table";

import { useDispatch, useSelector } from "react-redux";

import { getOffers ,deleteOffer} from "../../redux/slices/offerSlice";
import { useEffect } from "react";
const Offer = () => {
  const dispatch = useDispatch();
 const { offers, loading, error } = useSelector((state) => state.offers);
 useEffect(() => {
  dispatch(getOffers());
}, [dispatch]);
const handleDeleteOffer = (offerId) => {
  dispatch(deleteOffer(offerId)).then(() => {
    // Handle successful deletion if needed
    console.log("Product deleted successfully!");
  })
  .catch((error) => {
    // Handle errors if needed
    console.error("Error deleting product:", error);
  });
};
console.log(offers)
const OfferColumns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    
    {
      header: "Image",
      accessorKey: "Image",
      Cell: function (params) {
        console.log(params.row.original);
       return(<img src={params.row.original.Image} />);
      },
    },
    {
      header: "ACTIONS",
      accessorKey: "actions",
      Cell: function (params) {
        return (
          <>
            
            <Button variant="outlined" color="secondary" onClick={() => handleDeleteOffer(params.row.original.id)}>
              delete
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h6">Offer</Typography>

        <Button
          href="/Offer/add"         
          variant="contained"
          color="primary"
          startIcon={<FiPlus />}
          sx={{ borderRadius: "20px" }}
        >
          Add Offer
        </Button>
      </Box>
      {
        offers.length>=1?
      (<Table
        data={offers}
        fields={OfferColumns}
        numberOfRows={offers.length}
        enableTopToolBar={true}
        enableBottomToolBar={true}
        enablePagination={true}
        enableRowSelection={true}
        enableColumnFilters={true}
    //enableEditing={true}
        enableColumnDragging={true}
        routeLink="offer"
      //  onDelete={(offerId) => handleDeleteOffer(offerId)}
      />):""}
    </Box>
  );
};

export default Offer;
