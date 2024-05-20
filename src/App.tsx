import "./App.css";
import { Button, Drawer, Tabs, Input, Typography } from "@arco-design/web-react";
import { TabTrain } from "./tabs/TabTrain";
import { HistoryTab } from "./tabs/TabHistory";
import { AppProvider } from "./AppContext";
import { TabSettings } from "./tabs/TabSettings";
import { TabTemplates } from "./tabs/TabTemplates";
import { lang } from "./i18n";
import { TabSetup } from "./tabs/TabSetup";
import { useContext, useState } from "react";
import { CmdContext, CmdProvider } from "./utils/console";

function App() {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  return (
    <AppProvider>
      <CmdProvider>
        <Tabs
          defaultActiveTab="1"
          extra={
            <Button
              onClick={() => {
                setDrawerVisible(!drawerVisible);
              }}
            >
              {lang("app.btn.open_console")}
            </Button>
          }
        >
          <Tabs.TabPane key="1" title={lang("app.train_pane")}>
            <TabTrain />
          </Tabs.TabPane>
          <Tabs.TabPane key="2" title={lang("app.template_pane")}>
            <TabTemplates />
          </Tabs.TabPane>
          <Tabs.TabPane key="3" title={lang("app.history_pane")}>
            <HistoryTab />
          </Tabs.TabPane>
          <Tabs.TabPane key="4" title={lang("app.setting_pane")}>
            <TabSettings />
          </Tabs.TabPane>
          <Tabs.TabPane key="5" title={lang("app.setup_pane")}>
            <TabSetup />
          </Tabs.TabPane>
        </Tabs>
        <Drawer
          width={332}
          height={332}
          title={<span>Basic Information </span>}
          visible={drawerVisible}
          placement="bottom"
          onOk={() => {
            setDrawerVisible(false);
          }}
          onCancel={() => {
            setDrawerVisible(false);
          }}
        >
          <Console />
        </Drawer>
      </CmdProvider>
    </AppProvider>
  );
}

const Console = (props: any) => {
  const cmdContext = useContext(CmdContext);
  return <Typography.Text>{cmdContext.output}</Typography.Text>;
};

export default App;
