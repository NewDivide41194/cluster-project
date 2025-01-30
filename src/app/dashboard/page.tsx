"use client";

import { useEffect, useState } from "react";
import { ClusterType } from "../Types/common";

const Dashboard = () => {
    const [cluster, setCluster] = useState<ClusterType>();

    useEffect(() => {
        (async () => {
            const response = await fetch(`api/a/clusters/cluster-a`);
            const clusterDetail = await response.json() as ClusterType;
            setCluster(clusterDetail);
        })();
    }, []);

    return (
        <>
            <h1>Hello World!</h1>
            <div>
                Selected Cluster : {cluster?.name}
            </div>
            <div>
                Version : {cluster?.version}

            </div>
        </>
    )
}

export default Dashboard;