import { Heading, Text } from "@/shared";
import Cards from "./Cards";

export default function DocsContent() {
  return (
    <>
      <article className="mb-8 [&>*:not(:first-child)]:mt-6">
        <Heading as="h3" className="mb-6 capitalize">
          What is Chaplean?
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue.
        </Text>
        <Text>
          Vestibulum auctor ornare leo, non suscipit magna interdum eu.
          Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
          Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci
          ut diam condimentum, vel euismod erat placerat.
        </Text>
        <Text>
          In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem
          orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus
          vitae gravida viverra. Fusce (hover: Fusce ) vel tempor elit. Proin
          tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien,
          tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac
          tortor vel, egestas ullamcorper dui.
        </Text>
      </article>
      <article className="mb-8 [&>*:not(:first-child)]:mt-6">
        <Heading as="h3" className="mb-6 capitalize">
          What is Chaplean?
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue.
        </Text>
        <Text>
          Vestibulum auctor ornare leo, non suscipit magna interdum eu.
          Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
          Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci
          ut diam condimentum, vel euismod erat placerat.
        </Text>
        <Text>
          In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem
          orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus
          vitae gravida viverra. Fusce (hover: Fusce ) vel tempor elit. Proin
          tempus, magna id scelerisque vestibulum, nulla ex pharetra sapien,
          tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac
          tortor vel, egestas ullamcorper dui.
        </Text>
      </article>
      <Cards />
    </>
  );
}
