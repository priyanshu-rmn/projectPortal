import React from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import "./ProfileScreen.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ProfileScreen () {
return (
    <div>
       <Row className="profileContainer">
      <div style={{ marginTop :  '20px' }}></div>
   <Grid container spacing={2}>  
   <div style={{ marginLeft :  '20px' }}>
     WELCOME
      {/* WELCOME {userDetails.user.username}! */}
      </div>
<Box marginRight={1}>
<Form >
       <FormGroup check row>  
         
      <Col sm={{ size: 100, offset: 2 }}>
           <Button >Edit</Button>
         </Col>
       </FormGroup>
     </Form>
     </Box>     
</Grid>  
     
<hr  size="2" noshade></hr>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Item>
    <FormGroup row>
          <Label for="exampleFirstName" sm={2}>First Name</Label>
          <Col sm={10}>
            <Input type="First Name" name="First Name" id="exampleFirstName" />
            </Col>
        </FormGroup>
        </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <FormGroup row>
          <Label for="exampleLastName" sm={2}>Last Name</Label>
          <Col sm={10}>
            <Input type="Last Name" name="Last Name" id="exampleLastName" />
          </Col>
        </FormGroup>
    </Item>
  </Grid>
  <Grid item xs={6}>
    <Item>
    <FormGroup row>
          <Label for="exampleResumeLink" sm={2}>Resume Link</Label>
          <Col sm={10}>
            <Input type="Resume Link" name="Resume Link" id="exampleResumeLink" />
          </Col>
        </FormGroup>
    </Item>
  </Grid>

  <Grid item xs={6}>
    <Item>
      <FormGroup row>
          <Label for="exampleEmailId" sm={2}>Email id</Label>
          <Col sm={10}>
            <Input type="Email id" name="Email id" id="exampleEmailId" multiple />
          </Col>
        </FormGroup>
        </Item>
  </Grid>

  <Grid item xs={6}>
    <Item>
    <FormGroup row>
          <Label for="exampleCurrentCpi" sm={2}>Current CPI</Label>
          <Col sm={{size: 10}}>
            <Input type="Current CPI" name="Current CPI" id="exampleCurrentCpi" />
          </Col>
        </FormGroup>
    </Item>
  </Grid>

  <Grid item xs={6}>
    <Item>
    <FormGroup row>
          <Label for="exampleContactNo" sm={2}>Contact No</Label>
          <Col sm={10}>
            <Input type="Contact No" name="Contact No" id="exampleContactNo" />  
          </Col>
        </FormGroup>
    </Item>
  </Grid>


<Form >
<div style={{ marginTop :  '20px'}}></div>
       <FormGroup check row>  
             
      <Col sm={{ size: 100, offset: 2 }}>
    
           <Button >Submit</Button>
           
         </Col>
       </FormGroup>
     </Form>
   
     <Form >
<div style={{ marginTop :  '100px' , marginRight : "498px"}}></div>
       
     </Form>
     <div style={{ marginTop :  '20px'}}></div>

     <Grid item xs={6}>
    <Item>
    <FormGroup row>
          <Label for="exampleApplyingFor" sm={2}>Applying For</Label>
          <Col sm={10}>
            <Input type="Applying For" name="Applying For" id="exampleApplyingFor" />  
          </Col>
        </FormGroup>
    </Item>
  </Grid>

  <Grid item xs={6}>
    <Item>
    <FormGroup row>
          <Label for="exampleProffName" sm={2}>Proff Name</Label>
          <Col sm={10}>
            <Input type="Proff Name" name="Proff Name" id="exampleProffName"  />  
          </Col>
        </FormGroup>
    </Item>
  </Grid>
     </Grid>

     </Row>
          </div>

    
);
    
}

export default ProfileScreen;
/*


*/



