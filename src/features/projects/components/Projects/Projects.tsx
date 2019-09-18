import React from "react";
import { Button, Input } from "antd";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import styled from "styled-components";

// hooks
import useProjects from "features/projects/hooks/useProjects";

// utils
import { Project } from "features/projects/store/ProjectsStore";
import { Menu, Icon } from "antd";

// components
import ProjectItem from "features/projects/components/ProjectItem";

const { SubMenu } = Menu;

const AddProjectWrapper = styled.div`
  padding: 12px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 12px;
`;

const Projects = observer(({ history }: any) => {
  const {
    initialProjects,
    allProjects,
    addProjectHandler,
    projectValue,
    setProjectValueHandler,
    deleteProjectHandler,
    setSelectedProjectId
  } = useProjects();

  return (
    <div>
      {initialProjects.map((defaultProject: Project) => (
        <ProjectItem
          project={defaultProject}
          history={history}
          setSelectedProjectId={setSelectedProjectId}
        />
      ))}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="project" />
              Categories
            </span>
          }
        >
          {allProjects.map((project: Project) => (
            <ProjectItem
              project={project}
              history={history}
              deleteProjectHandler={deleteProjectHandler}
              setSelectedProjectId={setSelectedProjectId}
            />
          ))}
        </SubMenu>
      </Menu>
      <AddProjectWrapper>
        <StyledInput
          placeholder="Type something..."
          onChange={setProjectValueHandler}
          value={projectValue}
        />
        <Button
          onClick={addProjectHandler}
          type="primary"
          icon="plus"
          size="default"
          shape="round"
        >
          Add project
        </Button>
      </AddProjectWrapper>
    </div>
  );
});

export default withRouter(Projects);