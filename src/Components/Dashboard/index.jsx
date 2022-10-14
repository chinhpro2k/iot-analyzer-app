import {Badge, Card, Col, Row} from "antd";
import ChartCard from "./components/ChartCard";
import {dataDashboard , dataIPS} from "../../ultil/data";
import DemoPie from "./components/DemoPie";
import DemoLiquid from "./components/DemoLiquid";

const Dashboard = () => {
  return (
    <>
      <Row gutter={[20, 20]} style={{ marginBottom: 20 }}>
        <Col span={8}>
          <ChartCard
            title="Tổng số"
            total={<span>{dataDashboard?.device_counts ?? 0} thiết bị</span>}
            description={
              <>
                <div>
                  <Badge
                    status="success"
                    text={`Tổng số thiết bị đang được theo dõi: ${
                        dataDashboard?.monitored_devices_counts ?? 0
                    } thiết bị`}
                  />
                </div>
                <div>
                  <Badge
                    status="error"
                    text={`Tổng số thiết bị chưa theo dõi:${
                        dataDashboard?.free_devices_counts ?? 0
                    } thiết bị`}
                  />
                </div>
              </>
            }
          />
        </Col>
        <Col span={8}>
          <ChartCard
            title="Tổng số"
            total={<span>{dataDashboard?.alert_counts ?? 0} cảnh báo</span>}
            description={
              <>
                <div>
                  <Badge
                    status="success"
                    text={`Tổng số cảnh báo đã xử lý: ${
                        dataDashboard?.reviewed_alert_counts ?? 0
                    } cảnh báo`}
                  />
                </div>
                <div>
                  <Badge
                    status="error"
                    text={`Tổng số cảnh báo chưa xử lý: ${
                        dataDashboard?.pending_alert_counts ?? 0
                    } cảnh báo`}
                  />
                </div>
              </>
            }
          />
        </Col>
        <Col span={8}>
          <ChartCard
            title="Tổng số"
            description={
              <>
                <div>
                  <Badge
                    status="success"
                    text={`Tổng số cảnh báo MALWARE: ${
                        dataDashboard?.malware_alert_counts ?? 0
                    } cảnh báo`}
                  />
                </div>
                <div>
                  <Badge
                    status="error"
                    text={`Tổng số cảnh báo NETWORK: ${
                        dataDashboard?.network_alert_counts ?? 0
                    } cảnh báo`}
                  />
                </div>
                <div>
                  <Badge
                    status="error"
                    text={`Tổng số cảnh báo SYSCALL: ${
                        dataDashboard?.syscall_alert_counts ?? 0
                    } cảnh báo`}
                  />
                </div>
              </>
            }
          />
        </Col>
      </Row>

      <Row>
        <Col xs={24} md={8}>
          <Card title="Tài nguyên RAM máy chủ">
            <DemoLiquid value={dataDashboard?.RAM} title="RAM" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Tài nguyên CPU máy chủ">
            <DemoLiquid value={dataDashboard?.CPU} title="CPU" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Thống kê IP">
            <DemoPie data={dataIPS} />
          </Card>
        </Col>
        {/* <Col xs={24} md={8}>
          <Card title="Thống kê tên miền">
            <DemoWordCloud />
          </Card>
        </Col> */}
      </Row>
    </>
  );
};
export default Dashboard;
