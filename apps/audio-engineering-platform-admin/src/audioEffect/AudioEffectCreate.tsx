import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AudioEffectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="effectName" source="effectName" />
        <div />
      </SimpleForm>
    </Create>
  );
};