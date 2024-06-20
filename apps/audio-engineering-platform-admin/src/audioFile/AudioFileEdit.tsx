import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompositionTitle } from "../composition/CompositionTitle";

export const AudioFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
