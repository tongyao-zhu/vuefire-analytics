var Bar = { template: "<div>TEMP</div>" };
// 2. Define some routes
// Each route should map to a component.
const routes = [
  { path: "/bar", component: Bar },
  { path: "/line", component: Bar },
  { path: "/local", component: Bar }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});
var db = firebase
  .initializeApp({
    databaseURL: "https://awesome-56c60.firebaseio.com"
  })
  .database();
var chartsRef = db.ref("charts");

var app = new Vue({
  el: "#app",
  router,
  data: {
    newTodoText: "",
    username: "anonymous",
    localBarData: [["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]],
    localLineData: [["Sun", 32], ["Mon", 46], ["Tue", 28]]
  },
  firebase: {
    charts: {
      source: db.ref("charts"),
      // optionally bind as an object
      asObject: true
    }
  },
  computed: {
    currentRoute() {
      // We will see what `params` is shortly
      return this.$route.path;
    }
  }
});
export default app;
