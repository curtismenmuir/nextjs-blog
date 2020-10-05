import React, { Component } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  onSubmit() {
    alert("Email: " + this.state.email + "; Password: " + this.state.password);
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{"Login"}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Please enter your login details:</p>
          <form
            onSubmit={() => this.onSubmit()}
            className={utilStyles.loginForm}
          >
            <input
              id="email"
              type="email"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
            <input
              id="password"
              type="password"
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
            <button>Submit</button>
          </form>
        </section>
      </Layout>
    );
  }
}
