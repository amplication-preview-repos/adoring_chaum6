import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { CompositionList } from "./composition/CompositionList";
import { CompositionCreate } from "./composition/CompositionCreate";
import { CompositionEdit } from "./composition/CompositionEdit";
import { CompositionShow } from "./composition/CompositionShow";
import { SettingsList } from "./settings/SettingsList";
import { SettingsCreate } from "./settings/SettingsCreate";
import { SettingsEdit } from "./settings/SettingsEdit";
import { SettingsShow } from "./settings/SettingsShow";
import { AudioFileList } from "./audioFile/AudioFileList";
import { AudioFileCreate } from "./audioFile/AudioFileCreate";
import { AudioFileEdit } from "./audioFile/AudioFileEdit";
import { AudioFileShow } from "./audioFile/AudioFileShow";
import { AudioEffectList } from "./audioEffect/AudioEffectList";
import { AudioEffectCreate } from "./audioEffect/AudioEffectCreate";
import { AudioEffectEdit } from "./audioEffect/AudioEffectEdit";
import { AudioEffectShow } from "./audioEffect/AudioEffectShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { AudioProjectList } from "./audioProject/AudioProjectList";
import { AudioProjectCreate } from "./audioProject/AudioProjectCreate";
import { AudioProjectEdit } from "./audioProject/AudioProjectEdit";
import { AudioProjectShow } from "./audioProject/AudioProjectShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AudioEngineeringPlatform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Composition"
          list={CompositionList}
          edit={CompositionEdit}
          create={CompositionCreate}
          show={CompositionShow}
        />
        <Resource
          name="Settings"
          list={SettingsList}
          edit={SettingsEdit}
          create={SettingsCreate}
          show={SettingsShow}
        />
        <Resource
          name="AudioFile"
          list={AudioFileList}
          edit={AudioFileEdit}
          create={AudioFileCreate}
          show={AudioFileShow}
        />
        <Resource
          name="AudioEffect"
          list={AudioEffectList}
          edit={AudioEffectEdit}
          create={AudioEffectCreate}
          show={AudioEffectShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
        <Resource
          name="AudioProject"
          list={AudioProjectList}
          edit={AudioProjectEdit}
          create={AudioProjectCreate}
          show={AudioProjectShow}
        />
      </Admin>
    </div>
  );
};

export default App;
