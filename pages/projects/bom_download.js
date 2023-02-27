import Content from "@/components/Content";
import Layout from "@/components/Layout";
import React from "react";

export default function BOMDownload() {
    return (
        <Layout title="BOM Download">
            <Content>
                <Content.Title>BOM Download</Content.Title>
                <Content.Subtitle>
                    RND department used to make it easier for every employee to retrieve the file
                    that has been uploaded by "Product Development" and is intended for which
                    department can download it. The contents of the file are about the company's
                    bill of materials and confidential drawings.
                </Content.Subtitle>
                <Content.Grid>
                    <img src="/bom_download/1.png" alt="" />
                    <img src="/bom_download/2.png" alt="" />
                    <img src="/bom_download/3.png" alt="" />
                    <img src="/bom_download/4.png" alt="" />
                </Content.Grid>
            </Content>
        </Layout>
    );
}
