import React from 'react';
import styles from './index.less';
import Link from 'umi/link';
import { Row, Col, Icon, Button } from 'antd';
import intl from 'react-intl-universal';



function IndexPage() {
  return (
    <Row className={styles.wrap}>
      <Col span={12} className={styles.wrap}>
        <Col span={24} className={`${styles.wrap} ${styles.panel}`}>
          <Col span={16}>
            <Col className={`${styles.wrap} ${styles.panelBody}`}>
              <Icon className={styles.fs60} type="future" />
              <span className={styles.discription}>
                {intl.get('UPTIPF')}
              </span>
              <Button type="primary" shape="annular"  icon="upload">
                <Link to="/futures">
                  {intl.get('UPTITLEF')}
                </Link>
              </Button>
            </Col>
          </Col>
        </Col>
      </Col>
      <Col span={12} className={styles.wrap}>
        <Col span={24} className={`${styles.wrap} ${styles.panel}`}>
          <Col span={16}>
            <Col className={`${styles.wrap} ${styles.panelBody}`}>
              <Icon className={styles.fs60} type="spot" />
              <span className={styles.discription}>
                {intl.get('UPTIPS')}
              </span>
              <Button type="info" shape="annular"  icon="upload">
                <Link to="/spots">
                  {intl.get('UPTITLES')}
                </Link>
              </Button>
            </Col>
          </Col>
        </Col>
      </Col>
    </Row>
  );
}

export default IndexPage;
