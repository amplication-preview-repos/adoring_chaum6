import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AudioEffectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="effectName" source="effectName" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
