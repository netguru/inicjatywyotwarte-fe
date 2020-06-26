import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithTitle } from 'utils/helpers/RouteWithTitle';

import ScrollToTop from 'components/hoc/ScrollToTop'

import config from 'routes/config'
import paths from 'routes/paths'
import titles from 'routes/titles'

import Page from 'components/Page/Page'

export default () => (
  <>
  <ScrollToTop />
  <Page>
    <Switch>
      <RouteWithTitle path={paths.index} exact component={config.index} title={titles.index} />

      <Redirect exact from={paths.neighbourHelp} to={`${paths.neighbourHelp}${paths.resourcesPage(1)}`} />
      <Redirect exact from={`${paths.neighbourHelp}${paths.resources}`} to={`${paths.neighbourHelp}${paths.resourcesPage(1)}`} />
      <RouteWithTitle path={`${paths.neighbourHelp}${paths.resourcesPage(':page')}`} exact component={config.index} title={titles.neighbourHelp} />

      <Redirect exact from={paths.localBusinesses} to={`${paths.localBusinesses}${paths.resourcesPage(1)}`} />
      <Redirect exact from={`${paths.localBusinesses}${paths.resources}`} to={`${paths.localBusinesses}${paths.resourcesPage(1)}`} />
      <RouteWithTitle path={`${paths.localBusinesses}${paths.resourcesPage(':page')}`} exact component={config.index} title={titles.localBusinesses} />

      <Redirect exact from={paths.education} to={`${paths.education}${paths.resourcesPage(1)}`} />
      <Redirect exact from={`${paths.education}${paths.resources}`} to={`${paths.education}${paths.resourcesPage(1)}`} />
      <RouteWithTitle path={`${paths.education}${paths.resourcesPage(':page')}`} exact component={config.index} title={titles.education} />

      <Redirect exact from={paths.forHospitals} to={`${paths.forHospitals}${paths.resourcesPage(1)}`} />
      <Redirect exact from={`${paths.forHospitals}${paths.resources}`} to={`${paths.forHospitals}${paths.resourcesPage(1)}`} />
      <RouteWithTitle path={`${paths.forHospitals}${paths.resourcesPage(':page')}`} exact component={config.index} title={titles.forHospitals} />

      <Redirect exact from={paths.resources} to={paths.resourcesPage(1)} />
      <RouteWithTitle path={paths.resourcesPage(':page')} exact component={config.resourcesPage} title={titles.resourcesPage} />
      <RouteWithTitle path={paths.resourceItem(':id')} exact component={config.resourceItem} title={titles.resourceItem} />

      <RouteWithTitle path={paths.help} exact component={config.help} title={titles.help} />
      <RouteWithTitle path={paths.aboutUs} exact component={config.aboutUs} title={titles.aboutUs} />

      <RouteWithTitle path={paths.addResource} exact component={config.addResource} title={titles.addResource} />

      <RouteWithTitle path={paths.termsOfUse} exact component={config.termsOfUse} title={titles.termsOfUse} />
      <RouteWithTitle path={paths.privacyPolicy} exact component={config.privacyPolicy} title={titles.privacyPolicy} />

      <RouteWithTitle path={paths.addResourceSuccess} exact component={config.addResource} title={titles.addResource} />
      <RouteWithTitle path={paths.addResourceFailure} exact component={config.addResource} title={titles.addResource} />
      <RouteWithTitle path={paths.notFound} exact component={config.notFound} title={titles.notFound} />
    </Switch>
  </Page>
  </>
)
