import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/layout.jsx", [
    index("routes/home.jsx"),
    route("about-us/", "routes/about.jsx"),
    route("career/", "routes/career.jsx"),
    route("contact-us/", "routes/contact.jsx"),
    route("*", "routes/404.jsx"),
    // route("contact", "routes/contact.jsx"),
  ]),


];



