import React from "react"
import { render } from "@testing-library/react";

import Header from "../../components/header"

describe("Header", () => {
    it("renders correctly", async () => {

        const renderResult = render(
            <Header siteTitle="Default Starter" />
        );
        const title = await renderResult.findAllByText("Default Starter");
        expect(title.length).toBeGreaterThan(0);
    })
})