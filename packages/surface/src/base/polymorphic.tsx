import {ComponentType, HTMLProps, ReactElement, ReactNode} from "react";
import {JSX} from "react/jsx-runtime";
import IntrinsicElements = JSX.IntrinsicElements;

interface DynamicComponentProps {
    as: keyof IntrinsicElements | ComponentType;
    children: ReactNode;
}

const Polymorphic = ({ as: Element, children, ...rest }: DynamicComponentProps & HTMLProps<any>): ReactElement=> {
    // 使用指定的Element作为根元素，并传递其余属性
    return <div {...rest}>{children}</div>;
}

export {Polymorphic}
