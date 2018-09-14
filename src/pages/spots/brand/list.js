import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Table,Tag,Col,Button,Divider } from 'antd';
import BrandDetailModal from 'components/modal/ShowBrandModal';
import SelecteBrandsModal from 'components/modal/SelecteBrandsModal';

import { getCountry,removeBrand,saveBanned,changePageHandel } from 'actions/brand';

const brandList = ({dispatch,brands,countries,banneds,current,total}) => {
  const columns = [
    {
      title: intl.get('BRANDSERIAL'),
      dataIndex:'serial',
      key:'serial',
      render: text => text
    },{
      title:intl.get('BRANDLOGO'),
      dataIndex:'logo',
      key:'logo',
      width:70,
      align:'center',
      render:(data,record) => <img alt={record.title} src={data}/>
    },{
      title:intl.get('BRANDTITLE'),
      dataIndex:'title',
      key:'title',
      align:'center',
      render: text => <a href="javascript:;">{text}</a>
    },{
      title:intl.get('GOOGSMOUNT'),
      dataIndex:'amount',
      key:'amount',
      align:'center',
      render:text => text
    },{
      title:intl.get('NOTALLOWAREA'),
      dataIndex:'area',
      key:'area',
      width:150,
      render: areas => (
        <span>
          {areas.split(',').map( id => <Tag color="red" key={id}>{getCountry(id,countries)}</Tag>)}
        </span>
      )
    },{
      title:intl.get('BRANDTYPE'),
      dataIndex:'type',
      key:'type',
      align:'center',
      render: boolean => Number(boolean) ? intl.get('MERCHANTADD') : intl.get('SYSTEM')
    },{
      title:intl.get('ACTION'),
      key: 'action',
      align:'center',
      render:(text,record) => (
        <span>
          <BrandDetailModal
            content={record}
            country={getCountry(record.country_id,countries)}
            title= {intl.get('BRANDVIEW')}
            id={record.id}>
            <a href="javascript:;"> {intl.get('VIEW')}</a>
          </BrandDetailModal>
          <Divider type="vertical"/>
          <a href="javascript:;" onClick={removeBrand.bind(null,dispatch,record.id)}>{intl.get('DELETE')}</a>
          <Divider type="vertical"/>
          <BrandDetailModal
            content={record}
            title= {intl.get('EDITBANNED')}
            banneds={banneds}
            countries={countries}
            areas={record.area.split(',')}
            onOk={saveBanned.bind(null,dispatch)}
            id={record.id + '-country'}>
            <a href="javascript:;"> {intl.get('EDITBANNED')} </a>
          </BrandDetailModal>
        </span>
      )
    }];
  return (
    <Col span={24} className='g-t-wrap'>
      <Col span={24} className='g-t-main'>
        <header className='g-t-header'>
          <span className='g-t-title'>{intl.get('MYBRANS')}</span>
          <span>
            <Button.Group size="small">
              <SelecteBrandsModal
                title="选择我的品牌"
              >
                <Button type='primary' size="small" icon="check">{intl.get('SELECT')}</Button>
              </SelecteBrandsModal>

              <Button type='primary' icon="plus">{intl.get('CREATE')}</Button>
            </Button.Group>
          </span>
        </header>
        <Col className="g-t-form-wrap">
          <Table
            dataSource={brands}
            columns={columns}
            pagination={{
              // simple: true,
              current: current,
              total: total,
              pageSize:2,
              onChange: changePageHandel.bind(null,dispatch),
            }}/>
        </Col>
      </Col>
    </Col>
  )
};

function mapStateToProps(state){
  const { brands,banned,total,current } = state.brand;
  const countries = [
    {'id':'1','name':'Afghanistan'},
    {'id':'2','name':'Aland Islands'},
    {'id':'3','name':'Albania'},
    {'id':'4','name':'Algeria'},
    {'id':'5','name':'American Samoa'},
    {'id':'6','name':'Andorra'},
    {'id':'7','name':'Angola'},
    {'id':'8','name':'Anguilla'},
    {'id':'9','name':'Antigua and Barbuda'},
    {'id':'10','name':'Argentina'},
    {'id':'11','name':'Armenia'},
    {'id':'12','name':'Aruba'},
    {'id':'13','name':'Australia'},
    {'id':'14','name':'Austria'},
    {'id':'15','name':'Azerbaijan'},
    {'id':'16','name':'Bangladesh'},
    {'id':'17','name':'Bahrain'},
    {'id':'18','name':'Bahamas'},
    {'id':'19','name':'Barbados'},
    {'id':'20','name':'Belarus'},
    {'id':'21','name':intl.get('BELGIUM')},
    {'id':'22','name':'Belize'},
    {'id':'23','name':'Benin'},
    {'id':'24','name':'Bermuda'},
    {'id':'25','name':'Bhutan'},
    {'id':'26','name':'Bolivia'},
    {'id':'27','name':'Bosnia and Herzegovina'},
    {'id':'28','name':'Botswana'},
    {'id':'29','name':'Bouvet Island'},
    {'id':'30','name':'Brazil'},
    {'id':'31','name':'Brunei'},
    {'id':'32','name':'Bulgaria'},
    {'id':'33','name':'Burkina Faso'},
    {'id':'34','name':'Burundi'},
    {'id':'35','name':'Cambodia'},
    {'id':'36','name':'Cameroon'},
    {'id':'37','name':'Canada'},
    {'id':'38','name':'Cape Verde'},
    {'id':'39','name':'Central African Republic'},
    {'id':'40','name':'Chad'},
    {'id':'41','name':'Chile'},
    {'id':'42','name':'Christmas Islands'},
    {'id':'43','name':'Cocos (keeling) Islands'},
    {'id':'44','name':'Colombia'},
    {'id':'45','name':'Comoros'},
    {'id':'46','name':'Congo (Congo-Kinshasa)'},
    {'id':'47','name':'Congo'},
    {'id':'48','name':'Cook Islands'},
    {'id':'49','name':'Costa Rica'},
    {'id':'50','name':'Cote D\'Ivoire'},
    {'id':'51','name':'China'},
    {'id':'52','name':'Croatia'},
    {'id':'53','name':'Cuba'},
    {'id':'54','name':'Czech'},
    {'id':'55','name':'Cyprus'},
    {'id':'56','name':'Denmark'},
    {'id':'57','name':'Djibouti'},
    {'id':'58','name':'Dominica'},
    {'id':'59','name':'Ecuador'},
    {'id':'60','name':'Egypt'},
    {'id':'61','name':'Equatorial Guinea'},
    {'id':'62','name':'Eritrea'},
    {'id':'63','name':'Estonia'},
    {'id':'64','name':'Ethiopia'},
    {'id':'65','name':'Faroe Islands'},
    {'id':'66','name':'Fiji'},
    {'id':'67','name':'Finland'},
    {'id':'68','name':intl.get('FRANCE')},
    {'id':'69','name':'Franch Metropolitan'},
    {'id':'70','name':'Franch Guiana'},
    {'id':'71','name':'French Polynesia'},
    {'id':'72','name':'Gabon'},
    {'id':'73','name':'Gambia'},
    {'id':'74','name':'Georgia'},
    {'id':'75','name':intl.get('GERMANY')},
    {'id':'76','name':'Ghana'},
    {'id':'77','name':'Gibraltar'},
    {'id':'78','name':'Greece'},
    {'id':'79','name':'Grenada'},
    {'id':'80','name':'Guadeloupe'},
    {'id':'81','name':'Guam'},
    {'id':'82','name':'Guatemala'},
    {'id':'83','name':'Guernsey'},
    {'id':'84','name':'Guinea-Bissau'},
    {'id':'85','name':'Guinea'},
    {'id':'86','name':'Guyana'},
    {'id':'87','name':'Hong Kong'},
    {'id':'88','name':'Haiti'},
    {'id':'89','name':'Honduras'},
    {'id':'90','name':'Hungary'},
    {'id':'91','name':'Iceland'},
    {'id':'92','name':'India'},
    {'id':'93','name':'Indonesia'},
    {'id':'94','name':'Iran'},
    {'id':'95','name':'Iraq'},
    {'id':'96','name':'Ireland'},
    {'id':'97','name':'Isle of Man'},
    {'id':'98','name':'Israel'},
    {'id':'99','name':intl.get('ITALY')},
    {'id':'100','name':'Jamaica'},
    {'id':'101','name':'Japan'},
    {'id':'102','name':'Jersey'},
    {'id':'103','name':'Jordan'},
    {'id':'104','name':'Kazakhstan'},
    {'id':'105','name':'Kenya'},
    {'id':'106','name':'Kiribati'},
    {'id':'107','name':'Korea (South)'},
    {'id':'108','name':'Korea (North)'},
    {'id':'109','name':'Kuwait'},
    {'id':'110','name':'Kyrgyzstan'},
    {'id':'111','name':'Laos'},
    {'id':'112','name':'Latvia'},
    {'id':'113','name':'Lebanon'},
    {'id':'114','name':'Lesotho'},
    {'id':'115','name':'Liberia'},
    {'id':'116','name':'Libya'},
    {'id':'117','name':'Liechtenstein'},
    {'id':'118','name':'Lithuania'},
    {'id':'119','name':'Luxembourg'},
    {'id':'120','name':'Macau'},
    {'id':'121','name':'Macedonia'},
    {'id':'122','name':'Malawi'},
    {'id':'123','name':'Malaysia'},
    {'id':'124','name':'Madagascar'},
    {'id':'125','name':'Maldives'},
    {'id':'126','name':'Mali'},
    {'id':'127','name':'Malta'},
    {'id':'128','name':'Marshall Islands'},
    {'id':'129','name':'Martinique'},
    {'id':'130','name':'Mauritania'},
    {'id':'131','name':'Mauritius'},
    {'id':'132','name':'Mayotte'},
    {'id':'133','name':'Mexico'},
    {'id':'134','name':'Micronesia'},
    {'id':'135','name':'Moldova'},
    {'id':'136','name':'Monaco'},
    {'id':'137','name':'Mongolia'},
    {'id':'138','name':'Montenegro'},
    {'id':'139','name':'Montserrat'},
    {'id':'140','name':'Morocco'},
    {'id':'141','name':'Mozambique'},
    {'id':'142','name':'Myanmar'},
    {'id':'143','name':'Namibia'},
    {'id':'144','name':'Nauru'},
    {'id':'145','name':'Nepal'},
    {'id':'146','name':'Netherlands'},
    {'id':'147','name':'New Caledonia'},
    {'id':'148','name':'New Zealand'},
    {'id':'149','name':'Nicaragua'},
    {'id':'150','name':'Niger'},
    {'id':'151','name':'Nigeria'},
    {'id':'152','name':'Niue'},
    {'id':'153','name':'Norfolk Island'},
    {'id':'154','name':'Norway'},
    {'id':'155','name':'Oman'},
    {'id':'156','name':'Pakistan'},
    {'id':'157','name':'Palau'},
    {'id':'158','name':'Palestine'},
    {'id':'159','name':'Panama'},
    {'id':'160','name':'Papua New Guinea'},
    {'id':'161','name':'Paraguay'},
    {'id':'162','name':'Peru'},
    {'id':'163','name':'Philippines'},
    {'id':'164','name':'Pitcairn Islands'},
    {'id':'165','name':'Poland'},
    {'id':'166','name':intl.get('PORTUGAL')},
    {'id':'167','name':'Puerto Rico'},
    {'id':'168','name':'Qatar'},
    {'id':'169','name':'Reunion'},
    {'id':'170','name':'Romania'},
    {'id':'171','name':'Rwanda'},
    {'id':'172','name':'Russian Federation'},
    {'id':'173','name':'Saint Helena'},
    {'id':'174','name':'Saint Kitts-Nevis'},
    {'id':'175','name':'Saint Lucia'},
    {'id':'176','name':'Saint Vincent and the Grenadines'},
    {'id':'177','name':'El Salvador'},
    {'id':'178','name':'Samoa'},
    {'id':'179','name':'San Marino'},
    {'id':'180','name':'Sao Tome and Principe'},
    {'id':'181','name':'Saudi Arabia'},
    {'id':'182','name':'Senegal'},
    {'id':'183','name':'Seychelles'},
    {'id':'184','name':'Sierra Leone'},
    {'id':'185','name':'Singapore'},
    {'id':'186','name':'Serbia'},
    {'id':'187','name':'Slovakia'},
    {'id':'188','name':'Slovenia'},
    {'id':'189','name':'Solomon Islands'},
    {'id':'190','name':'Somalia'},
    {'id':'191','name':'South Africa'},
    {'id':'192','name':intl.get('SPAIN')},
    {'id':'193','name':'Sri Lanka'},
    {'id':'194','name':'Sudan'},
    {'id':'195','name':'Suriname'},
    {'id':'196','name':'Swaziland'},
    {'id':'197','name':intl.get('SWEDEN')},
    {'id':'198','name':intl.get('SWITZERLAND')},
    {'id':'199','name':intl.get('SYRIA')},
    {'id':'200','name':intl.get('TAJIKISTAN')},
    {'id':'201','name':intl.get('TANZANIA')},
    {'id':'202','name':'Taiwan'},
    {'id':'203','name':intl.get('THAILAND')},
    {'id':'204','name':'Trinidad and Tobago'},
    {'id':'205','name':'Timor-Leste'},
    {'id':'206','name':'Togo'},
    {'id':'207','name':'Tokelau'},
    {'id':'208','name':'Tonga'},
    {'id':'209','name':'Tunisia'},
    {'id':'210','name':'Turkey'},
    {'id':'211','name':'Turkmenistan'},
    {'id':'212','name':'Tuvalu'},
    {'id':'213','name':'Uganda'},
    {'id':'214','name':'Ukraine'},
    {'id':'215','name':intl.get('UAE')},
    {'id':'216','name':intl.get('UK')},
    {'id':'217','name':'United States'},
    {'id':'218','name':'Uruguay'},
    {'id':'219','name':'Uzbekistan'},
    {'id':'220','name':'Vanuatu'},
    {'id':'221','name':'Vatican City'},
    {'id':'222','name':'Venezuela'},
    {'id':'223','name':'Vietnam'},
    {'id':'224','name':'Wallis and Futuna'},
    {'id':'225','name':'Western Sahara'},
    {'id':'226','name':'Yemen'},
    {'id':'227','name':'Yugoslavia'},
    {'id':'228','name':'Zambia'},
    {'id':'229','name':'Zimbabwe'},
    {'id':'230','name':'Europe'},
    {'id':'231','name':'Other'}
  ];
  let banneds = banned.map(item => {
    const value = item;
    const country = countries.find(i => {
      return i.id === item
    });
    const label = country.name;
    return {value,label}
  });
  return {brands,countries,banneds,total,current}
}

export default connect(mapStateToProps)(brandList);
