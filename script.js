const { Grid, Table, TableHeaderRow } = DevExpress.DXReactGridBootstrap3;
const {
  Getter,
  Template,
  TemplatePlaceholder,
  Plugin } =
DevExpress.DXReactCore;
const { SortingState, IntegratedSorting } = DevExpress.DXReactGrid;

const Overlay = () => /*#__PURE__*/
React.createElement(Plugin, null, /*#__PURE__*/
React.createElement(Template, { name: "root" }, /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(TemplatePlaceholder, null), /*#__PURE__*/
React.createElement("div", { className: "overlay" }, /*#__PURE__*/React.createElement("div", null, "This is my overlay")))));




const PluggableFooter = () => /*#__PURE__*/
React.createElement(Plugin, null, /*#__PURE__*/
React.createElement(Template, { name: "footer" }, /*#__PURE__*/
React.createElement("div", { className: "panel-footer" }, /*#__PURE__*/React.createElement(TemplatePlaceholder, { name: "footerText" }))));



const FooterText = (props) => /*#__PURE__*/
React.createElement(Plugin, null, /*#__PURE__*/
React.createElement(Template, { name: "footerText" }, /*#__PURE__*/
React.createElement("span", null, /*#__PURE__*/React.createElement(TemplatePlaceholder, null), props.text)));



class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
      { name: "name", title: "Name" },
      { name: "artist", title: "Artist" },
      { name: "year", title: "Year" }],

      rows: [
      {
        name: "Their Satanic Majesties Request",
        artist: "The Rolling Stones",
        year: 1967 },

      { name: "Prime Cuts", artist: "David Bowie", year: 1983 },
      { name: "Human", artist: "Rag'n'Bone Man", year: 2017 }] };


  }

  render() {
    const { rows, columns } = this.state;

    return /*#__PURE__*/(
      React.createElement(Grid, { rows: rows, columns: columns }, /*#__PURE__*/
      React.createElement(SortingState, null), /*#__PURE__*/

      React.createElement(IntegratedSorting, null), /*#__PURE__*/

      React.createElement(Table, null), /*#__PURE__*/
      React.createElement(TableHeaderRow, { showSortingControls: true }), /*#__PURE__*/
      React.createElement(Overlay, null), /*#__PURE__*/
      React.createElement(PluggableFooter, null), /*#__PURE__*/
      React.createElement(FooterText, { text: "Some footer text" }), /*#__PURE__*/
      React.createElement(FooterText, { text: " - More footer text" })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));