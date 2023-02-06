import {
  Box,
  CircularProgress,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import Counter from '../components/counter/Counter.component';
import { fetchData } from '../services/app.service';
import { IDataRow } from '../types/data';

const Home: FC = (): ReactElement => {
  const [state, setState] = React.useState<{
    status: string | null;
    data: IDataRow[] | null | undefined;
    error: string | null;
  }>({
    status: 'pending',
    data: null,
    error: null,
  });

  const { status, data, error } = state;
  console.log(status, data, error);

  React.useEffect(() => {
    fetchData().then(
      (res) => {
        setState({ status: 'resolved', data: res, error: null });
      },
      (error) => {
        setState({ status: 'rejected', data: null, error });
      },
    );
  }, []);

  if (status === 'pending') {
    return (
      <Box sx={{ display: 'flex', textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  } else if (status === 'rejected') {
    return <h1>{error}</h1>;
  } else if (status === 'resolved') {
    return (
      <Grid container minHeight="100vh" p={0} m={0}>
        <Grid item md={8}>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 700 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data &&
                    data.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Box
                            component="img"
                            sx={{
                              height: 50,
                              width: 50,
                            }}
                            alt={row.name}
                            src={row.image}
                          />
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <Counter />
        </Grid>
      </Grid>
    );
  }

  return <div></div>;
};

export default Home;
