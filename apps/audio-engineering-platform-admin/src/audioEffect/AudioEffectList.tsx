import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AudioEffectList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AudioEffects"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="effectName" source="effectName" />
        <TextField label="ID" source="id" />
        <TextField label="settings" source="settings" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
