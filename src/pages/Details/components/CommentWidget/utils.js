const stateToTextMap = {
    true: "Hide",
    false: "Show",
};

const countToTextMap = {
    1: "reply",
};

export const getNestedChildrenCount = ({ showNestedItem, childrenCount }) => {
    if (!childrenCount) return "No replies";
    return `${stateToTextMap[showNestedItem]} ${childrenCount} ${countToTextMap[childrenCount] || "replies"
        }`;
};

