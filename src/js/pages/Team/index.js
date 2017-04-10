import React from 'react';
import TeamItem from '../../components/TeamItem';
import './team.scss';

/** Team component */
class Team extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props) {
    super(props);
  }

  /** @return {html} Team */
  render() {
    const {members, title, subTitle} = this.props.labels;

    return (
      <div className='container container-light-gray' id='team'>
        <h3 className='container-title'>{title}</h3>
        <p className='container-subTitle'>{subTitle}</p>
        <div className='teamList container-list'>
          { members.map((item, index) => <TeamItem {...item} key={index} />) }
        </div>
      </div>
    );
  }
}

Team.propTypes = {
  labels: React.PropTypes.object,
};

export default Team;
