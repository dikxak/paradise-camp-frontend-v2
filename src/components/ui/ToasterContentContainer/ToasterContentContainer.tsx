type ToasterContentContainerProps = {
  title?: string;
  description: string;
};

const ToasterContentContainer = ({
  title = "",
  description,
}: ToasterContentContainerProps) => (
  <div className="ml-2 flex flex-col gap-2">
    <h4 className="text-xl font-normal">{title}</h4>
    <p className="text-base">{description}</p>
  </div>
);

ToasterContentContainer.displayName = "ToasterContentContainer";

export default ToasterContentContainer;
