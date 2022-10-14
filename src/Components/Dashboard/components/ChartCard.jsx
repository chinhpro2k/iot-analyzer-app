import {Card,Typography} from "antd";

const ChartCard = (props) => {
  return(
      <Card style={{ minHeight: 190 }}>
          <Typography.Title level={3}>{props.title}</Typography.Title>
          {props.total ? (
              <Typography.Title level={3} style={{ marginTop: 20 }}>
                  <b>{props.total}</b>
              </Typography.Title>
          ) : (
              <Typography.Title level={3} style={{ marginTop: 20 }}>
                  {' '}
              </Typography.Title>
          )}
          {props.description}
      </Card>
  )
}
export default ChartCard;