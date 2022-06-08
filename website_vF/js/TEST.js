/* global turf c3  */

'use strict';
/**
 * Customize this impact tool by filling in the following values to match your data
 */
const config = {
  accessToken:
  'pk.eyJ1IjoiaGlkZGVuaHVza3kiLCJhIjoiY2wydWFwZXRsMDA3ZTNibGpmY3JmMWtzbiJ9.l9fIw7n5Pj3G9ONwdSOV-Q',
  /**
   * Replace with the url of your map style
   */
  mapStyle: 'mapbox://styles/hiddenhusky/cl2uau12x003115pes5osoizi/draft',
  /**
   * The layer within the vector tileset to use for querying
   */
  sourceLayer: 'wardcluster',
  /**
   * This sets the title in the sidebar and the <title> tag of the app
   */
  title: 'Voting Trends 2004-2016',
  /**
   * This sets the description in the sidebar
   */
  description:
    'This map shows estimated voter turnout as a percentage of total population in 2016, select a county to visualize historical data',
  /**
   * Data fields to chart from the source data
   */

  fields: [
    'Opportunity_p1',
    'Transport_p1',
    'Median_House_p1',
    'gcse_2013',
    'ptal_2013',
    'median_house_2014_log',
  ],

  labels: ['opp', 'trans', 'housing', 'edu','ptal', 'log house'],

  placeNameField: 'NAME',
  summaryType: 'avg',
  dataSeriesLabel: 'Voter Turnout',
  zoomToFeature: true,
  highlightColor: '#fff',
  chartType: 'line',
  sourceId: 'composite',
  autoLegend: true,
  autoLegendDecimals: 1,
  legendColors: ['#c200c2', '#a200a3', '#810184', '#600165', '#400246'],
  legendValues: [13.779, 33.44, 40.88, 46.99, 53.86],
  studioLayerName: 'choropleth-fill',
};