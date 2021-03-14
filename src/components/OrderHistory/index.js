import React from 'react';
import {
  TableContainer, Table, TableHead,
  TableRow, TableBody, TableCell
} from '@material-ui/core';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const columns = [
  {
    id: 'orderCreatedDate',
    lable: 'Order Date'
  },
  {
    id: 'documentID',
    lable: 'Order ID'
  },
  {
    id: 'orderTotal',
    lable: 'Total'
  }
];

const styles = {
  fontSize: '16px',
  cursor: 'pointer',
  width: '10%'
};

const formatText = (columnName, columnValue, orderCreatedDate) => {
  switch (columnName) {
    case 'orderTotal':
      return `£${parseFloat(columnValue).toFixed(2)}`;
    case 'orderCreatedDate':
      return moment.unix(orderCreatedDate.seconds).format('DD/MM/YYYY')
    default:
      return columnValue;
  }
};

const OrderHistory = ({ orders }) => {
  const history = useHistory();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, pos) => {
              const { lable } = column;

              return (
                <TableCell
                  key={pos}
                  style={styles}
                >
                  {lable}
                </TableCell>
              )
            })}
          </TableRow>
        </TableHead>

        <TableBody>

          {(Array.isArray(orders) && orders.length > 0) && orders.map((row, pos) => {
            const { documentID, orderCreatedDate } = row;

            row.documentID = row.documentID.substring(0,6);

            return (
              <TableRow
                key={pos}
                onClick={() => history.push(`/order/${documentID}`)}
              >

                {columns.map((column, pos) => {
                  const columnName = column.id;
                  const columnValue = row[columnName];
                  const formattedText = formatText(columnName, columnValue, orderCreatedDate);

                  return (
                    <TableCell
                      key={pos}
                      style={styles}
                    >
                      {formattedText}
                    </TableCell>
                  )
                })}

              </TableRow>
            )
          })}

        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default OrderHistory;
