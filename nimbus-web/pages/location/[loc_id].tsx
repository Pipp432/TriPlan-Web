import FullDetailCard from "@/components/FullDetailCard/FullDetailCard";
import getLocation from "@/utils/api/getLocation";
import { GetStaticPropsContext } from "next";
import React from "react";

interface IProps {
    location: any;
}

const location = ({ location }: IProps) => {
    return (
        <div className="min-h-screen h-full w-screen overflow-x-hidden font-montserrat p-10 bg-neutral-100">
            <FullDetailCard location={location} />
        </div>
    );
};

export default location;

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking", // can also be true or 'blocking'
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { params } = context;
    const loc_id = params?.loc_id;
    const location = await getLocation(loc_id as string);
    console.log(location);
    return { props: { location } };
}