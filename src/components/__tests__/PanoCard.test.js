import { shallowMount } from "@vue/test-utils";
import PanoCard from "../PanoCard.vue";

const photoStub = {
  id: "1",
  title: "stub",
  thumbnail: "stub.jpg",
  username: "stubUsername",
  owner: "stub@username",
  pathAlias: "stubusername",
};

const mockedRouter = {
  push: jest.fn(),
};

describe("<PanoCard>", () => {
  it("Reners normal photo", () => {
    const wrapper = shallowMount(PanoCard, {
      props: {
        photo: photoStub,
        small: false,
      },
      global: {
        mocks: {
          $route: {},
          $router: mockedRouter,
        },
      },
    });

    expect(wrapper.get(".title").text()).toEqual(photoStub.title);
    expect(wrapper.get("img").attributes("src")).toEqual(photoStub.thumbnail);
    expect(wrapper.get(".footer")).toBeDefined();
  });

  it("Renders photo without footer", () => {
    const wrapper = shallowMount(PanoCard, {
      props: {
        photo: photoStub,
        small: true,
      },
      global: {
        mocks: {
          $route: {},
          $router: mockedRouter,
        },
      },
    });

    expect(wrapper.get(".title").text()).toEqual(photoStub.title);
    expect(wrapper.get("img").attributes("src")).toEqual(photoStub.thumbnail);
    expect(wrapper.findAll(".footer")).toHaveLength(0);
  });
});
