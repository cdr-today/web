const axios = require('axios');
const { Button, Icon, Popover, Divider } = require('antd');

const ss = {
  iframe: {
    height: '90vh',
    width: '100%'
  }
}


const func = async () => {
  let res = await axios.get('/hello');
  console.log(res);
}

const Index = (props) => {
  console.log(props)
  return(
    <div>
      <Button
	onClick={() => func()}
      >
	hello
      </Button>
    </div>
  )
};

Index.getInitialProps = async function() {
  return {
    a: 1
  };
}

export default Index;
