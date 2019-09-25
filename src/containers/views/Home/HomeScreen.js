import React, { Component } from 'react'
import { Paper, Table, TableHead, TableBody, TableFooter, TableCell } from '@material-ui/core';
class Home extends Component {
    render() {
        return (
            <Paper className={"Paper-container"}>
                <Table>
                    <TableHead className="header-component">
                        <TableCell>a</TableCell>
                        <TableCell>b</TableCell>
                        <TableCell>c</TableCell>
                        <TableCell>d</TableCell>
                    </TableHead>
                    <TableBody>
                        <TableCell>a1</TableCell>
                        <TableCell>b1</TableCell>
                        <TableCell>c1</TableCell>
                        <TableCell>d1</TableCell>
                    </TableBody>
                    <TableFooter>

                    </TableFooter>
                </Table>
            </Paper>
        )
    }
}

export default Home
