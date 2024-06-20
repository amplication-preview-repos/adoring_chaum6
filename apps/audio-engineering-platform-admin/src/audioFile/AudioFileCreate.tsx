import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompositionTitle } from "../composition/CompositionTitle";

export const AudioFileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="composition.id"
          reference="Composition"
          label="composition"
        >
          <SelectInput optionText={CompositionTitle} />
        </ReferenceInput>
        <TextInput label="fileName" source="fileName" />
        <TextInput label="filePath" source="filePath" />
      </SimpleForm>
    </Create>
  );
};
