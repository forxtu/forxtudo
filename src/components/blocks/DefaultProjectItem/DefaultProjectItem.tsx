import React from "react";
import styled from "styled-components";
import { Icon, Typography } from "antd";

// utils
import { Project } from "features/projects/store/ProjectsStore";

// styles
import { flexAlignItemsCenter } from "styles/utils";

const { Text } = Typography;

const ProjectText = styled(Text)``;
const ProjectIcon = styled(Icon)``;
const ProjectItemWrapper = styled.div`
  ${flexAlignItemsCenter};

  ${ProjectIcon} {
    font-size: 18px;
    margin-right: 5px;
  }

  ${ProjectText} {
    font-size: 14px;
  }
`;

type DefaultProjectItem = {
  project: Project;
};

const DefaultProjectItem = ({ project }: DefaultProjectItem) => (
  <ProjectItemWrapper>
    <ProjectIcon type="inbox" />
    <ProjectText>{project.name}</ProjectText>
  </ProjectItemWrapper>
);

export default DefaultProjectItem;
