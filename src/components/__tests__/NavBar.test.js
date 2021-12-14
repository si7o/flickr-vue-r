import { mount } from "@vue/test-utils";
import NavBar from "../NavBar.vue";

describe("<NavBar>", () => {
  it("Renders menu options if curent URL not PhotoPage", () => {
    const $route = {
      name: "UserPage",
      path: "/photos/:pathAlias",
      hash: "#",
      params: { pathAlias: "user@name" },
    };

    const wrapper = mount(NavBar, {
      global: {
        mocks: {
          $route,
        },
      },
    });

    expect(wrapper.findAll("a")).toHaveLength(1);
    expect(wrapper.findAll("router-link")).toHaveLength(2);
  });

  it("Does not render menu options if curent URL is PhotoPage", () => {
    const $route = {
      name: "PhotoPage",
      path: "/photos/:pathAlias/:photoId",
      hash: "#",
      params: { pathAlias: "username", photoId: "123456" },
    };

    const wrapper = mount(NavBar, {
      global: {
        mocks: {
          $route,
        },
      },
    });

    expect(wrapper.findAll("router-link")).toHaveLength(1);
    expect(wrapper.findAll("a")).toHaveLength(0);
  });
});
