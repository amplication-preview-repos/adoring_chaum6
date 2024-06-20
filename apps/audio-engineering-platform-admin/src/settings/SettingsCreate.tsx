import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SettingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="configKey" source="configKey" />
        <div />
      </SimpleForm>
    </Create>
  );
};
