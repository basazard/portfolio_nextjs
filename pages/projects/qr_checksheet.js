import Content from "@/components/Content";
import Layout from "@/components/Layout";
import React from "react";

export default function QRChecksheet() {
    return (
        <Layout title="QR Checksheet">
            <Content>
                <Content.Title>QR Checksheet</Content.Title>
                <Content.Subtitle>
                    Engineering Department which involves checking the condition of the machines on
                    a daily basis that are running on the production line, where each machine has
                    been tagged with a QR label, automatically, so that the operator can more easily
                    check.
                </Content.Subtitle>
                <Content.Grid>
                    <img src="/qr_checksheet/1.png" alt="" />
                    <img src="/qr_checksheet/2.png" alt="" />
                    <img src="/qr_checksheet/3.png" alt="" />
                    <img src="/qr_checksheet/4.png" alt="" />
                </Content.Grid>
            </Content>
        </Layout>
    );
}
