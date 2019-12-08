import React, {Fragment} from 'react';
import Chart from 'react-apexcharts'
import options from './options'


function App() {

  return (
    <Fragment>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={options.series}
              type="bar"
              width="800"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
