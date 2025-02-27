import TechnicalIndicatorSeries from './TechnicalIndicatorSeries'
import CandleStickWidget from '../widget/CandleStickWidget'
import { ChartType } from '../data/options/styleOptions'
import YAxis from '../component/YAxis'
import { InvalidateLevel } from '../data/ChartData'
import { TechnicalIndicatorType } from '../data/options/technicalIndicatorParamOptions'

export default class CandleStickSeries extends TechnicalIndicatorSeries {
  constructor (props) {
    super(props)
    this._chartType = ChartType.CANDLE_STICK
  }

  _createYAxis (props) {
    return new YAxis(props.chartData, true)
  }

  _createMainWidget (container, props) {
    return new CandleStickWidget({
      container,
      chartData: props.chartData,
      xAxis: props.xAxis,
      yAxis: this._yAxis,
      additionalDataProvider: {
        technicalIndicatorType: this.technicalIndicatorType.bind(this),
        chartType: this.chartType.bind(this),
        tag: this.tag.bind(this)
      }
    })
  }

  _isRealTime () {
    return this._chartType === ChartType.REAL_TIME
  }

  chartType () {
    return this._chartType
  }

  setChartType (chartType) {
    if (this._chartType !== chartType) {
      this._chartType = chartType
      if (this._chartData.styleOptions().realTime.averageLine.display && this._isRealTime()) {
        this._chartData.calcTechnicalIndicator(TechnicalIndicatorType.AVERAGE)
      }
      this.invalidate(InvalidateLevel.FULL)
    }
  }
}
