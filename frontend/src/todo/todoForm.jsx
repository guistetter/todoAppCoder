import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => {
  const keyHandler = e => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };
  return (
    <div role="form" className="todoForm">
      <div className="col-xs-12 col-sm-9 col-md-10">
        <input
          id="description"
          className="form-control"
          onChange={props.handleChange}
          onKeyUp={keyHandler}
          placeholder="Adicione uma tarefa"
          value={props.description}
        ></input>
      </div>
      <div className="col-xs-12 col-sm-3 col-md-2">
        <IconButton
          style="primary"
          icon="plus"
          onClick={props.handleAdd}
        ></IconButton>
        <IconButton
          style="info"
          icon="search"
          onClick={props.handleSearch}
        ></IconButton>
        <IconButton
          style="default"
          icon="refresh"
          onClick={props.handleClear}
        ></IconButton>
      </div>
    </div>
  );
};
/*Component Grid <Grid cols="12 9 10">
Com este component nao preciso escrever a linha abaixo:
<div className="col-xs-12 col-sm-9 col-md-10"></div>
*/
