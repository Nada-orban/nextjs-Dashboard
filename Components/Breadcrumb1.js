
import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { Box } from '@mui/system';

// function handleClick(event) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
// }

export default function IconBreadcrumbs() {
    const router = useRouter();


    function generateBreadcrumbs() {
        // Remove any query parameters, as those aren't included in breadcrumbs
        const asPathWithoutQuery = router.asPath.split("?")[0];

        // Break down the path between "/"s, removing empty entities
        // Ex:"/my/nested/path" --> ["my", "nested", "path"]
        const asPathNestedRoutes = asPathWithoutQuery.split("/")
            .filter(v => v.length > 0);

        // Iterate over the list of nested route parts and build
        // a "crumb" object for each one.
        const crumblist = asPathNestedRoutes.map((subpath, idx) => {
            // We can get the partial nested route for the crumb
            // by joining together the path parts up to this point.
            const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
            // The title will just be the route string for now
            const title = subpath;
            return { href, text: subpath };
        })

        // Add in a default "Home" crumb for the top-level
        return [{ href: "/", text: "Home" }, ...crumblist];
    }


    const breadcrumbs = generateBreadcrumbs();
    return (
        <Breadcrumbs aria-label="breadcrumb" >
            {
                breadcrumbs.map((crumb, idx) => (
                    <Crumb {...crumb} key={idx} last={idx === breadcrumbs.length - 1} />
                ))
            }
        </Breadcrumbs>
        // // <div role="presentation" onClick={handleClick}>

        //     {/* <Link
        //             underline="hover"
        //             sx={{ display: 'flex', alignItems: 'center' }}
        //             color="inherit"
        //             href="/"
        //         
        //             <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        //         </Link>
        //         <Link
        //             underline="hover"
        //             sx={{ display: 'flex', alignItems: 'center' }}
        //             color="inherit"
        //             href="/table"
        //         >
        //             Table
        //         </Link>


        //     </Breadcrumbs> */}
        // // </div>
    );
}
function Crumb({ text, href, last = false }) {
    // The last crumb is rendered as normal text since we are already on the page
    if (last) {
        return <Typography color="text.primary">{text}</Typography>
    }

    // All other crumbs will be rendered as links that can be visited 
    return (

        <Box display="flex" gap="2px" >
            <HomeIcon sx={{ width: "20px" }} />
            <Link underline="hover" color="inherit" href={href}>
                {text}
            </Link>
        </Box>


    );
}