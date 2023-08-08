import { Box ,Grid, InputAdornment} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { Visibility } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import { useState ,useEffect} from "react";
const Login=()=>{
    const boxstyle = {
        // position: "absolute",
        // top: "50%",
        // left: "50%",
        // transform: "translate(-50%, -50%)",
        // width: "60%",
        // height: "80%",
        // bgcolor: "background.paper",
        // boxShadow: 10,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        height: "80%",
        bgcolor: "background.paper",
        boxShadow: 10,
        // Set width and height to 100% to fill up parent container
        width: "100%",
        height: "100%",
        
        
      };
      const center = {
        position: "relative",
        top: "50%",
        left: "37%",
      };
      const [userEmail, setUserEmail] = useState("");
const [password, setPassword] = useState("");
const [error,setError]=useState("");
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const errora = useSelector((state) => state.auth.error);

      useEffect(() => {
        localStorage.clear('token')
        if (errora) {
          console.log("Store Product Error Message:", errora.message);
          setError("Wrong Email or password");
        }
        else {
          setError("") ;
         
        }
      }, []);

      const handleLogin = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        const credentials = {
          email: userEmail,
          password: password,
        };
        dispatch(login(credentials));

        setTimeout(checkForAuth, 2000);

      };
    const checkForAuth=()=>{
      if(    localStorage.getItem('token')!=undefined &&localStorage.getItem('token')!=null&&localStorage.getItem('token')!=''){
        console.log('goin')
        navigate("/products");

      }
      else{
        console.log('error')
      }
      
    }
      {/**    InputProps={{
                            endAdornment: <InputAdornment position="end"><Visibility/></InputAdornment>

                          }}*/} 
return(

<>

<div>
  

<Box sx={boxstyle}>

    <Grid container style={{
      height:"100%"
    }}>
        <Grid item xs={20} sm={12} lg={6} style={
          {
            height:"100%"
          }
        }>
        <Box
                style={{
                  backgroundSize: "cover",
                  height: "100%",
                  minHeight: "500px",
                  backgroundColor: "#fff",
                }}
              >
                 <Container className="h-full py-9 px-0" style={{padding:"0"}}>
                  
                    <Box sx={center}>
                     
                     
                      <Typography component="h1" variant="h4">
                        <img src="Login3.png" alt="" />
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      className="h-full py-16"
                      sx={{ mt: 2 }}
                    >
                      <Grid container spacing={1} className="h-full">
                        <div className="flex flex-col justify-between w-full">
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" 

                          }}>
                              <img src="/Logo.svg" alt="" className="mx-auto "/>
                          </Grid>
                          <Grid item xs={12} sx={{ ml: "3em", mr: "3em" 

                          }}><p style={{color:"red"}}>{error}</p> 
                         <label htmlFor="" className="text-20 font-bold leading-30" style={{ fontWeight: 'bold', color: 'black' }}>
                                          Admin Email
                                        </label>
                                        <TextField
                                          required
                                          fullWidth
                                          id="email"
                                          name="email"
                                          autoComplete="email"
                                          className="shadow-md"
                                          value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                                        />

                          </Grid>
                          <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <label htmlFor="" className="text-20 font-bold leading-30 "  style={{ fontWeight: 'bold', color: 'black' }}>Password</label>
                          <TextField
                   
                            required
                            fullWidth
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            className="shadow-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          </Grid>
                          <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                                                  <Stack direction="row" spacing={2}>
                       {/**   <FormControlLabel
                            sx={{ width: "60%" }}
                            className="text-base font-bold leading-30"
                            control={   <Checkbox
                             
                              sx={{
                                color: 'black', // Set the color to black
                                '&.Mui-checked': {
                                  color: 'black', // Set the color to black when checked
                                },
                              }}
                            />}
                            label={<span style={{ fontWeight: 'bold', color: 'black' }}>Save the password</span>}
                          />*/} 
                        </Stack>

                          </Grid>
                          <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
            {/* ... (existing code) */}
            <Button
              type="submit" // Change the type to "submit" to trigger the onSubmit event
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: "10px",
                mr: "20px",
                color: "#ffffff",
                minWidth: "170px",
                backgroundColor: "#AB714D",
                height: "60%",
              }}
              onClick={handleLogin}
            >
              Login

            </Button>
                          </Grid>
                        </div>
                        



                        
                      </Grid>
                    </Box>
                  </Container>
                
                </Box>
        </Grid>   
          <Grid item xs={20} sm={12} lg={6}>

          <Box
      sx={{
        backgroundColor: "#2D2727",
        backgroundSize: "cover",
        marginLeft: "15px",
        color: "#f5f5f5",
        padding: "0px",
        margin: "0px",
        height: "100%",
        display: 'block', // Display the box by default
        '@media (max-width: 768px)': {
          display: 'none', // Hide the box on screens smaller than 768px
        },
        '@media (max-width: 1100px)': {
          display: 'none', // Hide the box on screens smaller than 768px
        },
        '@media (max-width: 920px)': {
          display: 'none', // Hide the box on screens smaller than 768px
        },
     
      }}
    >
      <div className="flex flex-col">
        <img src="/preload 1.png" alt="" className="h-1/6 w-80 self-end" />
        <div className="flex justify-center gap-0">
          <img src="Logo 1.png" alt="" className="w-40" />
          <img src="a1 1 1.png" alt="" className="w-40" />
        </div>
        <img src="/suchiBack2 1 (1).png" alt="" className="h-1/6 w-64" />
      </div>
    </Box>

          </Grid>
       
    </Grid>
</Box>

</div>

</>
)






}
export default Login;