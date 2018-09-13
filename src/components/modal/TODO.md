一、选择品牌弹窗（SelectBrandsModal）：
   处理要点：
      1、业务需求当关闭弹窗组件的时候重置 Brands-list；技术要点父级组件的关闭操作，操作子级组件的重置操作；
      2、实现父组件操作子组件方法：onRef
      
      父级：
          class selectBrandsModal extends Component{
                  
                          ····
            
            onRef = (ref) => {
              this.child = ref
            };
            resetHandel = () => {
              const { onReset } = this.child;
              onReset()
            };
            render(){          
              return(
                          ····
                        
                <Brands onRef={this.onRef}/>
                          
                          ····
                          
              )
            }
          }
      子级：
          class brandsList extends Component{
          
                  
                          ····   
                                   
            componentDidMount(){
              this.props.onRef(this)
            };
            onReset = () => {
              const {form:{resetFields}} = this.props;
              resetFields()
            };  
            render(){
              <div>
                <Form>
                  <Form.Item>
                    {
                      getFieldDecorator('userMode')(<Checkbox.Group onChange={onChange}>
                        <List
                          style={{'padding':'20px'}}
                          grid={{ gutter: 16, column: 4 }}
                          dataSource={ list }
                          renderItem={ item => (
                            <List.Item>
                              <Card
                                bodyStyle={{'display':'none'}}
                                extra={<Checkbox value={item.id}/>}
                                cover={<img alt="example" style={{'padding':'10px'}} src={`${item.logo}@110h_216w_1e_1c`}/>}
                                title={item.name}/>
                            </List.Item>
                          )}/>
                      </Checkbox.Group>)
                    }
                  </Form.Item>
                </Form>
              </div>
            }        
          }
          
      
