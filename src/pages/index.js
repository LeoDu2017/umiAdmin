import React from 'react';
import styles from './index.less';
import Link from 'umi/link';
import { Row, Col, Button } from 'antd';
import intl from 'react-intl-universal';
import Svg from 'components/Svg';

function IndexPage({location}) {
  return (
    <Row className={styles.wrap}>
      <Col span={12} className={styles.wrap}>
        <Col span={24} className={`${styles.wrap} ${styles.panel}`}>
          <Col span={16}>
            <Col className={`${styles.wrap} ${styles.panelBody}`}>
              <Svg className={styles.fs60} type="future"> </Svg>
              <span className={styles.discription}>
                {intl.get('UPTIPF')}
              </span>
              <Button type="primary" className={styles.annular} icon="upload">
                <Link to={`/futures${location.search}`} className={styles.ml10}>
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
              <Svg className={styles.fs60} type="spot"> </Svg>
              <span className={styles.discription}>
                {intl.get('UPTIPS')}
              </span>
              <Button type="primary" className={styles.annular} icon="upload">
                <Link to={`/spots${location.search}`} className={styles.ml10}>
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
