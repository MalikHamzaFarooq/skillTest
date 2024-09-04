import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
  Modal,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import FlagIcon from '@mui/icons-material/Flag';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const api_url = "http://hn.algolia.com/api/v1/search?query=html";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState(null);

  // Function to fetch data
  const getApiData = async () => {
    try {
      const response = await fetch(api_url);
      const result = await response.json();
      setData(result.hits);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleCardClick = (record) => {
    setSelectedRecord(record);
  };

  const handleClose = () => {
    setSelectedRecord(null);
  };

  if (loading) {
    return <div id="loading">Loading...</div>;
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 2, }}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ minHeight: 250, position: 'relative',bgcolor:'darkorchid',color:'white'}}>
              <CardContent sx={{textAlign:'center',paddingTop:'15%'}}>
                <Typography variant="h6" component="div">
                  {item.title || "No Title"}
                </Typography>
                <Typography >
                  Author: {item.author}
                </Typography>
                <Typography >
                  Points: {item.points}
                </Typography>
                <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                  <IconButton  size="small"><EditIcon sx={{color:'#eed3f5'}}/></IconButton>
                  <IconButton size="small"><FlagIcon sx={{color:'#eed3f5'}} /></IconButton>
                  <IconButton size="small"><DeleteIcon sx={{color:'#eed3f5'}} /></IconButton>
                </Box>
                <Button 
                  variant="outlined" 
                  onClick={() => handleCardClick(item)}
                  sx={{ mt: 2 ,bgcolor:'Background'}}
                >
                  More Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedRecord && (
        <Modal
          open={Boolean(selectedRecord)}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box 
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-title" variant="h6" component="h2">
              {selectedRecord.title || "No Title"}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Author: {selectedRecord.author}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Points: {selectedRecord.points}
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              URL: <a href={selectedRecord.url} target="_blank" rel="noopener noreferrer">{selectedRecord.url}</a>
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              Created At: {new Date(selectedRecord.created_at).toLocaleString()}
            </Typography>
         
          </Box>
        </Modal>
      )}
    </Box>
  );
}

export default Home;
