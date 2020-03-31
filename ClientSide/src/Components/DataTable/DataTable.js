import React, { Component, Fragment } from "react";
import TableRow from "./Elements/TableRow";
import HeadFilter from "./Component/HeadFilter";
import { Table_Heading } from "./constants";

export default class DataTable extends Component {
  render() {
    return (
      <Fragment>
        <table>
          <HeadFilter content={Table_Heading} />
          {this.props.children}
        </table>
      </Fragment>
    );
  }
}
